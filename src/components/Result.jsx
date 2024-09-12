import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Result({data}){
const calculatedData = calculateInvestmentResults(data)
const initial = data.initialInvestment 

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {calculatedData.map((item) => {
                const totalInterest = item.valueEndOfYear - item.year * item.annualInvestment - initial
                const totalAmount = item.valueEndOfYear - totalInterest

                return <tr key={item.year}>
                    <th>{item.year}</th>
                    <th>{formatter.format(item.valueEndOfYear)}</th>
                    <th>{formatter.format(item.interest)}</th>
                    <th>{formatter.format(totalInterest)}</th>
                    <th>{formatter.format(totalAmount)}</th>
                </tr>
            })}
        </tbody>
    </table>
}