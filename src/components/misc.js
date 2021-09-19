//hier fct für hilfen etc
import Media from "react-media"




export function ermittleAnzahlbilder(bildschirmbreite){
    let ergebnis;
    if (bildschirmbreite < 1439){
      ergebnis = 2;
    } else if (bildschirmbreite > 1440){
      ergebnis = 3;
    }
    console.log(ergebnis)
    return ergebnis
}


export function ermittleAutoplay(bildschirmbreite){
    let ergebnis;
    if (bildschirmbreite < 1439){
      ergebnis = false;
    } else if (bildschirmbreite > 1440){
      ergebnis = true;
    }
    return ergebnis
}

export function ermittleBannerText(frameWidth){
    let name
    if (frameWidth < 1080){
      name="imgText_mobile_hidden";
    } else if (frameWidth > 1080){
        name="egal"
    }
    console.log("name: " + name )
    console.log("ich funktioniere!")
    return name 
  }

