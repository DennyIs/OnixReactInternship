import React from 'react';
import octocat from "../../assets/components/img/octocat.png";

export default function Footer() {
    const footer_text = 'Original layout',
        footer_href = 'http://psd-html-css.ru/templates/mogo-besplatnyy-psd-shablon-lendingovoy-stranicy',
        footer_text1 = 'Designed by',
        author_name = 'DENIS KONONCHENKO',
        github = 'GitHub',
        github_href = 'https://github.com/DennyIs/OnixReactInternship';
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer title">
                    <p>
                        {footer_text1}
                    </p>
                    <h2>
                        {author_name}
                    </h2>
                </div>
                <div className="footer title">
                    <p>
                        {footer_text}
                    </p>
                    <a href={footer_href}>Layout</a>
                </div>
                <div className="footer title">
                    <p>
                        {github}
                    </p>
                    <h2>
                        <a href={github_href}><img src={octocat} alt="Icon"/></a>
                    </h2>
                </div>
            </div>
        </footer>
    )

}