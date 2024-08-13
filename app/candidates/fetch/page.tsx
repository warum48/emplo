
'use client'

import React, { useState } from 'react';

const FetchCandidates = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://192.168.0.230:8005/api/candidates');
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            //setError(err?.message);
            console.log('ERROR', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Fetch Candidates</h1>
            <button onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Candidates'}
            </button>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}

export default FetchCandidates;
