import { useContext } from "react";
import LoadingCircleProvider from "../../components/loadingCircleProvider";
import { FollowerContext } from "../../context/followers";
import "./style.css";
import { FollowingData } from "../../hooks/getuserFollowing";
import Title from "../../components/title";
import { ReturnedData, useGitUserData } from "../../hooks/getGituser";
import { useLocalJson } from "../../hooks/useLocalStorage";
import { Date2String } from "../../utils";

export function Box({
    user,
    deleteFunc,
}: {
    user: FollowingData[0];
    deleteFunc: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}) {
    const [data] = useGitUserData(user.login);
    return (
        <div className="box">
            <div className="title">
                <div className="img-holder">
                    <img src={data?.avatar_url} alt="" />
                </div>
                <h4>{data?.name}</h4>
                <p>{data && `JavaScript Developer`}</p>
            </div>
            <div className="text-container">
                <p className="friends-p">
                    {data && `${data.followers} Friends`}
                </p>
                <p className="projects-p">
                    {data && `${data.public_repos} Projects`}
                </p>
                <p className="articles-p">
                    {data && `${data.followers} Articles`}
                </p>
            </div>
            <div className="end">
                <span className="created-at">
                    {data && `Joined ${Date2String(new Date(data.created_at))}`}
                </span>
                <div className="other-side">
                    <a href={data?.html_url} className="blue" target="_blank">
                        {data && "Profile"}
                    </a>
                    <input
                        type="button"
                        onClick={deleteFunc}
                        value={data ? "Delete" : ""}
                        className="delete-button red"
                    />
                </div>
            </div>
            <div className="communicate">
                <a href="tel:+" target="_blank">
                    {data && <i className="fa-solid fa-phone"></i>}
                </a>
                <a href={`mailto:${data?.email}`} target="_blank">
                    {data && <i className="fa-regular fa-envelope"></i>}
                </a>
            </div>
        </div>
    );
}
export default function Friends() {
    const data = useContext(FollowerContext);
    const [delAccount, setDeletedAccount] = useLocalJson<Array<string>>(
        "deletedAccounts",
        []
    );
    return (
        <div className="friends-page">
            <Title>Friends</Title>
            <LoadingCircleProvider data={data}>
                {data && (
                    <div className="boxes-container">
                        {data
                            .filter((user) => !delAccount.includes(user.login))
                            .slice(0, 7)
                            .map((user) => {
                                const func = () => {
                                    setDeletedAccount((pre) => [
                                        ...pre,
                                        user.login,
                                    ]);
                                };
                                return <Box user={user} deleteFunc={func} />;
                            })}
                    </div>
                )}
            </LoadingCircleProvider>
        </div>
    );
}
