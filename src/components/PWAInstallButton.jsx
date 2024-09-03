import { useState } from 'react';
function PWAInstallButton() {
    const [showInstallButton, setShowInstallButton] = useState(true);

    // return (

    //     showInstallButton 
    //     ? 
    //     (<button>
    //         Install PWA app
    //     </button>) : null    
    // );
    // return(
    //     showInstallButton ?
    //     <button>
    //       Instal PWA app
    //     </button> : null
    // )

    return(
        <>            
            {showInstallButton && (<button>Install PWA app</button>)}
        </>
    )       // false && IM NOT GONNA CHECK OTHER STATEMENTS
}

export default PWAInstallButton