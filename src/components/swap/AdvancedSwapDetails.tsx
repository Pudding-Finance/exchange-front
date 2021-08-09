import { Trade, TradeType } from '@pancakeswap-libs/sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Field } from '../../state/swap/actions'
import { useUserSlippageTolerance } from '../../state/user/hooks'
import { TYPE } from '../Shared'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from '../../utils/prices'
import { useI18n } from 'i18n/i18n-react'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { RowBetween, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import { SectionBreak } from './styleds'
import SwapRoute from './SwapRoute'

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  const i18n = useI18n()
  const theme = useContext(ThemeContext)
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)

  return (
    <>
      <AutoColumn style={{ padding: '0 20px' }}>
        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.colors.text2}>
              {isExactIn ? i18n(828, 'Minimum received') : i18n(830, 'Maximum sold')}
            </TYPE.black>
            <QuestionHelper
              text={i18n(
                832,
                'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.'
              )}
            />
          </RowFixed>
          <RowFixed>
            <TYPE.black color={theme.colors.text1} fontSize={14}>
              {isExactIn
                ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade.outputAmount.currency.symbol}` ??
                  '-'
                : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade.inputAmount.currency.symbol}` ??
                  '-'}
            </TYPE.black>
          </RowFixed>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.colors.text2}>
              {i18n(836, 'Price Impact')}
            </TYPE.black>
            <QuestionHelper
              text={i18n(834, 'The difference between the market price and estimated price due to trade size.')}
            />
          </RowFixed>
          <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.colors.text2}>
              {i18n(838, 'Liquidity Provider Fee')}
            </TYPE.black>
            <QuestionHelper
              text={i18n(
                844,
                'For each trade a %totalFee% fee is paid. %treasuryFee% goes to liquidity providers, %teamFee% goes to the %team% treasury and %buybackFee% goes to %token% buyback and burn.',
                {
                  totalFee: '0.25',
                  treasuryFee: '0.15%',
                  teamFee: '0.05%',
                  buybackFee: '0.05%',
                  token: 'PUD',
                  team: 'PuddingSwap'
                }
              )}
            />
          </RowFixed>
          <TYPE.black fontSize={14} color={theme.colors.text1}>
            {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol}` : '-'}
          </TYPE.black>
        </RowBetween>
      </AutoColumn>
    </>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const i18n = useI18n()
  const theme = useContext(ThemeContext)

  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="md">
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <SectionBreak />
              <AutoColumn style={{ padding: '0 24px' }}>
                <RowFixed>
                  <TYPE.black fontSize={14} fontWeight={400} color={theme.colors.text2}>
                    {i18n(840, 'Route')}
                  </TYPE.black>
                  <QuestionHelper
                    text={i18n(842, 'Routing through these tokens resulted in the best price for your trade.')}
                  />
                </RowFixed>
                <SwapRoute trade={trade} />
              </AutoColumn>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
