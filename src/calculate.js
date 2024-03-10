// Uses law of haversines to calculate distance between two sets of coordinates
export const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371e3;
    const p1 = toRad(lat1);
    const p2 = toRad(lat2);
    const differenceLng = lng2 - lng1;
    const differenceLambda = (differenceLng * Math.PI) / 180;
    const distance = Math.acos(Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(differenceLambda)) * R;
    return distance;
}

const toRad = (value) => {
    return value * Math.PI/180;
}

export const getScore = (distance) => {
    return Math.floor(5000*Math.exp((-1 * distance) / 2000));
}