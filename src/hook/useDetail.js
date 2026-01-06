import { useState, useEffect } from 'react';

const useDetail = (antennaId) => {
  const [antenna, setAntenna] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAntenna = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://italtelecback2.vercel.app/italtelec/${antennaId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Antenna non trovata');
      }

      const data = await response.json();
      setAntenna(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (antennaId) {
      fetchAntenna();
    } else {
      setLoading(false);
      setError('ID antenna non specificato');
    }
  }, [antennaId]);

  return { antenna, loading, error, refetch: fetchAntenna };
};

export default useDetail;