import { BrowserRouter, Routes, Route, Link } from "react-router";
// import cn from 'classnames';
import classes from './App.module.scss';
import avatar from '@assets/icon.webp';
// import video from '@/name.mp4'; (or another format)

const LINKS = {
    SOCIALS: {
        GITHUB: "https://github.com/Mr-Kinako/Iris-page-by-Mr_Kinako/",
    }
};

const Home = () => {
    const { GITHUB } = LINKS.SOCIALS;
    const avatarSource: string | null = avatar;

    return (
        <main className={classes['homepage-container']}>
            {/* <video
                src={video}
                autoPlay={false}
                muted={true}
                controls={true}
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag..
            </video> */}

            <div className={classes.profileCard}>
                <div className={classes.mainInfo}>
                    <div className={classes.avatarContainer}>
                        {avatarSource ? (
                            <img className={classes.avatar}
                                src={avatarSource}
                                title=""
                                alt=""
                                draggable={false}
                            />
                        ) : (
                            <div className={classes.avatarPlaceholder_container}>
                                <div role="img" className={classes.avatarPlaceholder}
                                    title="avatar placeholder"
                                    aria-label="avatar placeholder: ア"
                                    style={{ cursor: "default" }}
                                >
                                    ア
                                </div>
                            </div>
                        )}
                    </div>

                    <h1 className={classes.nickname}>アイリス</h1>
                </div>

                <div className={classes['description-main-container']}>
                    <div className={classes.descContent}>
                        <p className={classes.description}>
                            :p <br />
                            I love you so much, my Mr_Kinako 💜
                        </p>
                    </div>
                </div>

                <p className={classes.footerNote}>
                    {'Found a bug? '}
                    <a className={classes.issueLink}
                        href={`${GITHUB}/issues`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Issues (opens in a new tab)"
                        title="GitHub Issues (opens in a new tab)"
                    >
                        Open an issue
                    </a>
                </p>
            </div>
        </main>
    );
};

export const App = () => {
    return (
        <div className={classes['app-root']}>
            <BrowserRouter>
                <div className={classes['background']}
                    aria-hidden="true"
                    draggable={false}
                ></div>
                
                <div className={classes['app-content']}>
                    <Routes>
                        <Route path="/Iris-page-by-Mr_Kinako/"
                            element={
                                <Home />
                            }
                        />

                        <Route path="*"
                            element={
                                <>
                                <h2 className="not-found-title">
                                    Page not found.
                                </h2>

                                <p style={{
                                        textAlign: "center",
                                        userSelect: "none"
                                    }}
                                >
                                    <Link
                                        className="callback-btn-not-found"
                                        to="/Iris-page-by-Mr_Kinako/"
                                        replace
                                    >
                                        Navigate to: "/Iris-page-by-Mr_Kinako/".
                                    </Link>
                                </p>
                                </>
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
