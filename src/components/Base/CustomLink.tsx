import * as React from "react"
import { Link, Route } from "react-router-dom"
import * as style from "./CustomLink.scss"

export interface LinkOption {
    to: string
    onLinkClick?: () => void
}
class CustomLink extends React.Component<LinkOption, any> {
    /**
     * Link点击
     */
    // handleLinkClick = () => {
    //     this.props.onLinkClick()
    // }

    render() {
        const { to, children, onLinkClick, ...rest } = this.props
        return (
            <Route
                path={to}
                children={({ match }) => {
                    return (
                        <div>
                            <Link
                                onClick={onLinkClick}
                                className={style.link}
                                to={to}
                                {...rest}
                            >
                                {children}
                            </Link>
                        </div>
                        // <div>
                        //     <Link
                        //         onClick={onLinkClick}
                        //         className={`${style.link}
                        //          ${(match ?  match.path : undefined) === to ? style.activeLink : ""}`}
                        //         to={to}
                        //         {...rest}
                        //     >
                        //         {children}
                        //     </Link>
                        // </div>
                    )
                }}
            />
        )
    }
}

export default CustomLink
