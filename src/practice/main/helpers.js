const formatNumberToString = number => Number(number).toLocaleString();

const sortArtistsByPlayCount = (firstArtist, secondArtist) =>
    secondArtist.playcount - firstArtist.playcount;

export {formatNumberToString, sortArtistsByPlayCount};
