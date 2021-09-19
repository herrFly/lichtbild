function ermittleAutoplay(bildschirmbreite){
    let ergebnis;
    if (bildschirmbreite < 1439){
      ergebnis = false;
    } else if (bildschirmbreite > 1440){
      ergebnis = true;
    }
    return ergebnis
}