import PocketBase from 'pocketbase';
import { useState } from 'react';

export function OtherMouse() {
    const pb = new PocketBase('https://itbt.pockethost.io');
    const [record, setRecord] = useState({});

    pb.collection('sync').subscribe('z3cbnvlrc13szne', function (e) {
        setRecord(e.record);
    }, { /* other options like expand, custom headers, etc. */ });

    return <div style={{ position: "fixed", left: record.mx1, top: record.my1, zIndex: 10, transition: "all 2s" }}>
        <img src="/next.svg" width={100} />
    </div>

}