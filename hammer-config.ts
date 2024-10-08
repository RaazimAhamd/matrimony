import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';


@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  override overrides = {
    pan: { direction: 6 }, // Allow left/right swipes
  };
}
