import { useEffect, useState } from 'react';
function PWAInstallButton() {
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {

        const handleBeforeIntallPrompt = (event) => {
            console.log('beforeinstallprompt event fired');
            event.preventDefault();
            setShowInstallButton(true);
        }

        window.addEventListener('beforeinstallprompt', handleBeforeIntallPrompt);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeIntallPrompt)
    }, [])
 
    return(
        showInstallButton ?
        <button>
          Instal PWA app
        </button> : null
    )

    
}

export default PWAInstallButton