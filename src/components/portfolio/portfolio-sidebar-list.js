import React from "react";
import PortfolioItem from "./portfolio-item";

const PortfolioSidebarList = props => {
    const portfolioList = props.data.map(PortfolioItem => {
        return (
            <div className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={PortfolioItem.thumb_image_url} />
                </div>
                <h1 className="title">{PortfolioItem.name}</h1>
                <h1>{PortfolioItem.id}</h1>
            </div>
        )
    })

    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
}

export default PortfolioSidebarList;