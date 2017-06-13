import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit, OnDestroy {

  @ViewChild('recordVideo') videoEl: ElementRef;
  recording: boolean;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    var video = this.videoEl.nativeElement;
  }

  startRecording() {

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    }).then((stream) => {

      this.recording = true;

      var videoTracks = stream.getVideoTracks();

      var video = this.videoEl.nativeElement;
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }).catch(function (err) {
      console.log(err);
    });
  }
}
