export default function Placeholder() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100dvh'
        }}>
            <span style={{ fontSize: '48px', animation: 'spin 2s linear infinite' }}>⚙️</span>
            <span style={{ fontSize: '24px' }}>Work in progress...</span>
        </div>
    );
}