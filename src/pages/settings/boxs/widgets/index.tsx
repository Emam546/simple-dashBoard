import { ReactNode, useContext } from "react";
import { WidgetsContext, WidgetsValues } from "../../../../context/widgets";
import CheckBox from "../../../../components/customCheckBox";
import "./style.css"
function ContCheckBox({
    _type,
    children,
    ...a
}: {
    children: ReactNode;
    _type: keyof WidgetsValues;
} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) {
    const [data, setState] = useContext(WidgetsContext);
    function OnChange() {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setState({ ...data, [_type]: event.target.checked });
        };
    }
    return (
        <div className="check-box-container">
            <CheckBox checked={data[_type]} onChange={OnChange()} {...a} />
            <label htmlFor={a.id}>{children}</label>    
        </div>
    );
}
export default function WidgetsControl() {
    
    return (
        <div className="widgets-control">
            <h2>Widgets Control</h2>
            <p>Show/Hide Widgets</p>
            <ContCheckBox id="draft" name="draft-state" _type="draft">
                Quick Draft
            </ContCheckBox>
            <ContCheckBox id="yearly" name="yearly-state" _type="yearly">
                Yearly Targets
            </ContCheckBox>
            <ContCheckBox id="tickets" name="tickets-state" _type="tickets">
                Tickets Statistics
            </ContCheckBox>
            <ContCheckBox id="news" name="news-state" _type="news">
                Latest News
            </ContCheckBox>
            <ContCheckBox id="tasks" name="tasks-state" _type="tasks">
                Latest Tasks
            </ContCheckBox>
            <ContCheckBox id="topSearch" name="topSearch-state" _type="topSearch">
                Top Search Items
            </ContCheckBox>
        </div>
    );
}
