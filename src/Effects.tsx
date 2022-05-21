import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState(-1);

    useEffect(() => {
        const callback = (newMessage: number) => setLastMessage(newMessage);
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
            setLastMessage(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
