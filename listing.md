
# Pudding Swap Listing Tutorial

So, you’ve come, you’ve tasted our secret sauce and now you’re wanting to be a part of the Pudding kitchen.

If you’re interested in listing on the Pudding swap, follow this guide closely.

## Adding Tokens

If you are seeking to be added to the [exchange.puddingswap.finance](https://exchange.puddingswap.finance/) exchange, you should:

1. Fork the [Pudding Exchange Interface](https://github.com/Pudding-Finance/exchange-front) repository on GitHub
2. Upload your **logo** in a 96*96px transparent .png format to the `/public/images/coins` directory. Please name the logo as your symbol in uppercase.

3. Add your **token information** using the example format provided below to `puddingswap.json` in the `/src/constants/token/` directory.

4. Create a **pull request** detailing information about your project, website address, and contact details (telegram)

## Examples

**Logo format:**

`PUD.png`

**Token information format:**

```json
{
"name": "PUD Token",
"symbol": "PUD",
"address": "0xaaae746b5e55d14398879312660e9fde07fbc1dc",
"chainId": 128,
"decimals": 18,
"logoURI": "/images/coins/PUD.png"
},
```

If you're not comfortable with GitHub pull requests, please open a [new issue](https://github.com/Pudding-Finance/exchange-front/issues) requesting to be added.

## Reviews

Once added, tokens are also re-reviewed at regular intervals in order to maintain quality assurance in-line with the below criteria, and may be removed should severe and/or unresolved issues be encountered.

### Criteria

- Volume
- Liquidity
- Community feedback
