// src/hooks/useUserLocation.js
// ============================================================================
// Hook orquestrador de localização.
// Responsabilidades:
//   • estado (region, error, loading)
//   • ciclo de vida (permissão, get inicial, watch)
//   • chamar serviceLocation (NÃO expo-location diretamente)
// O hook NÃO sabe como o service obtém a localização — igual
// useCadastroScreen NÃO sabe como serviceUser insere no SQLite.
// ============================================================================
import { useEffect, useState } from 'react';
import {
  DEFAULT_REGION,
  requestLocationPermission,
  getCurrentRegion,
  watchRegion,
} from '../../services/maps/serviceLocation';

/**
 * @returns {{
 *   region: { latitude:number, longitude:number, latitudeDelta:number, longitudeDelta:number } | null,
 *   error: string | null,
 *   loading: boolean,
 * }}
 */
export function Location() {
  const [region, setRegion] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let sub = null;

    (async () => {
      try {
        const status = await requestLocationPermission();
        if (cancelled) return;

        if (status !== 'granted') {
          setError('Permissão de localização negada.');
          setRegion(DEFAULT_REGION);
          setLoading(false);
          return;
        }

        const current = await getCurrentRegion();
        if (cancelled) return;

        setRegion(current);
        setLoading(false);

        // Acompanha deslocamento
        sub = await watchRegion((next) => {
          if (cancelled) return;
          setRegion(next);
        });
      } catch (err) {
        if (cancelled) return;
        setError(err?.message ?? 'Falha ao obter localização.');
        setRegion(DEFAULT_REGION);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      if (sub) sub.remove();
    };
  }, []);

  return { region, error, loading };
}