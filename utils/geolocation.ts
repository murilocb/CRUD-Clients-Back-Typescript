export function calcularDistanciaEmKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const raioTerraKm: number = 6371; // Raio médio da Terra em quilômetros
  const dLat: number = deg2rad(lat2 - lat1);
  const dLon: number = deg2rad(lon2 - lon1);
  const a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia: number = raioTerraKm * c;
  return distancia;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}
