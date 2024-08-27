import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

function ClassicToggleButton({theme, setTheme})
{

    return (
        <>
           <Classic duration={750}
                     style={
                         {
                            color: theme === 'light' ? "blue" : "yellow",
                            backgroundColor: "var(--background-color)",
                            fontSize: "1.9em"
                         }
                     }
                     toggled={theme === 'light'}
                     toggle={() => setTheme(theme === 'light' ? 'dark' : 'light') } 
            />
        </>
    );

}

export default ClassicToggleButton