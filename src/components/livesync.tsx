import { useEffect, useRef } from "react";
import PocketBase from 'pocketbase';

export function LiveSync() {
    const pb = new PocketBase('https://itbt.pockethost.io');
    const mouseMoveTimeout = useRef<any>(null);

    function handleMouseMove(event: MouseEvent) {
        if (mouseMoveTimeout.current) {
            clearTimeout(mouseMoveTimeout.current);
        }

        mouseMoveTimeout.current = setTimeout(() => {
            const data = {
                "mx1": event.pageX,
                "my1": event.pageY
            };
            console.log("updated", event.pageX, event.pageY)
            pb.collection('sync').update('z3cbnvlrc13szne', data);
        }, 1000); // Adjust cooldown time as needed (in milliseconds)
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(mouseMoveTimeout.current); // Clear any pending timeouts
        };
    }, []);

    return <>
    </>;
}
