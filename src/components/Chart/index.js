import React from "react"
import "./index.scss"
import { BarChart } from "./BarChart"
import { getPercent, getQuestion } from "./utils"
import Pie from "./PieChart"
import { Actions } from "./Actions"

export const Chart = ({
  id,
  sort = true,
  pie = false,
  title = true,
  condition,
  source = undefined,
  groupBy = undefined,
}) => {
  const { label, results, total } = getQuestion({
    id,
    condition,
    source,
    groupBy,
  })
  const res = results
    .sort((b, a) =>
      sort ? (a.value > b.value ? 1 : b.value > a.value ? -1 : 0) : 0
    )
    .map(r => {
      return { ...r, percent: getPercent(r.value, total) }
    })

  return (
    <div className="chart" id={id}>
      <h4>{title ? (typeof title === "string" ? title : label) : null}</h4>
      {pie ? (
        <Pie results={res} total={total} />
      ) : (
        <BarChart results={res} total={total} />
      )}
      <Actions id={id} />
    </div>
  )
}
