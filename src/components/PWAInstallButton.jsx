import { useEffect, useState } from 'react';
function PWAInstallButton() {
    const [showInstallButton, setShowInstallButton] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {

        const handleBeforeIntallPrompt = (event) => {
            console.log('beforeinstallprompt event fired');
            event.preventDefault();
            setDeferredPrompt(event);
            setShowInstallButton(true);
        }

        window.addEventListener('beforeinstallprompt', handleBeforeIntallPrompt);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeIntallPrompt)
    }, [])
    
    const handleInstallClick = async () => {
        if (deferredPrompt) 
        {
            const choiceResult = await deferredPrompt.prompt(); //Promise object

            if (choiceResult.outcome === 'accepted') 
            {
                setDeferredPrompt(null);
                setShowInstallButton(false);
            }

        }
    }
    return(
        showInstallButton ?
        <button onClick={handleInstallClick}>
          Instal PWA app
        </button> : null
    )

    
}

export default PWAInstallButton