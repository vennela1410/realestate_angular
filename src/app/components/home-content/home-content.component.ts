import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {

  @ViewChild('nav')
  slider!: NgImageSliderComponent;

  imageObject = [{
    images: [{
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_1.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_1.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_2.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_2.jpg',
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_3.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_3.jpg',
      title: 'Example with title.'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_4.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_4.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_5.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_5.jpg',
    }],
    title: 'Mansion',
    location: 'Novi, Mi 48836',
    yearBuild: '1990',
    rate: '$45,789.00'

  },
  {
    images: [{
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_6.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_6.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_7.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_7.jpg',
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_8.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_8.jpg',
      title: 'Example with title.'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_9.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_9.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_10.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_10.jpg',
    }],
    title: 'Brick House',
    location: 'Farmington Hills, Mi 48839',
    yearBuild: '2014',
    rate: '$97,450.00'

  },
  {
    images: [{
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_11.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_11.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_12.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_12.jpg',
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_13.jpeg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_13.jpeg',
      title: 'Example with title.'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_14.jpeg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_14.jpeg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_15.jpg',
      thumbImage: 'https://raw.githubusercontent.com/vennela9801/real_estate_angular15/main/src/assets/houses/img_15.jpg',
    }],
    title: 'Brick House',
    location: 'Farmington Hills, Mi 48839',
    yearBuild: '2014',
    rate: '$97,450.00'

  }];


  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
