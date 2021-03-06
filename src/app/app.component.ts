import { Component, ViewChild } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyResizingCroppingImages, ImgCropperConfig, ImgCropperEvent } from '@alyle/ui/resizing-cropping-images';

// import { styles } from './app.styles';
// uncomment the upper line and comment the below style variable if you want the css for scale slider

const styles = {
  actions: {
    display: 'flex'
  },
  cropping: {
    maxWidth: '400px',
    height: '300px'
  },
  flex: {
    flex: 1
  }
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes = this.theme.addStyleSheet(styles);
  croppedImg: string;
  
  @ViewChild(LyResizingCroppingImages) imgCropper: LyResizingCroppingImages;
  scale: number;
  myConfig: ImgCropperConfig = {
    width: 150,
    height: 150,
    fill: '#ff2997'
  };

  constructor(
    private theme: LyTheme2
  ) { 
    console.log('working')
  }

  /** on event */
  onCrop(e: ImgCropperEvent) {
    this.croppedImg = e.dataURL;
    console.log(e);
    console.log('cropped');
  }
  /** manual crop */
  getCroppedImg() {
    const img = this.imgCropper.crop();
    console.log(img);
    return img.dataURL;
  }
}
