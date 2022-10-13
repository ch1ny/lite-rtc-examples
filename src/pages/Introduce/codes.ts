export default {
	display_media_demo: `import React, { useRef } from 'react';

export default () => {
    const ref = useRef<HTMLVideoElement>(null);

    const onStart = () => {
        navigator.mediaDevices.getDisplayMedia().then((stream: MediaStream) => {
            (ref.current as HTMLVideoElement).srcObject = stream;
        });
    };

    return (
        <>
            <div>
                <video width="500" height="300" muted autoPlay ref={ref} />
            </div>
            <button onClick={onStart}>Start</button>
        </>
    )
}
`,
};
