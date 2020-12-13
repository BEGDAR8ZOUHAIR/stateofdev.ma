import React from "react"
import { Link } from "gatsby"
import Playground from "../../assets/Playground.svg"
import Download from "../../assets/Download.svg"
import Article from "../../assets/Article.svg"

export const Actions = () => {
  return (
    <div className="actions-list">
      <div className="container">
        <div className="action-item">
          <Playground />
          <p> Play with survey results using online playground </p>
          <Link to="/playground" className="outline">
            Open Results Playground
          </Link>
        </div>

        <div className="action-item">
          <Download />
          <p> Interested to go further with the survey results? </p>
          <a
            className="outline"
            download
            target="_blank"
            href="https://github.com/DevC-Casa/stateofdev.ma/blob/results_prview/results/2020/state-od-dev-ma-2020.zip?raw=true"
          >
            Download Survey Results
          </a>
        </div>

        <div className="action-item">
          <Article />
          <p> Share your perspective about the results </p>
          <a
            className="outline"
            download
            target="_blank"
            href="https://github.com/DevC-Casa/stateofdev.ma/"
          >
            Write an article
          </a>
        </div>
      </div>
    </div>
  )
}
