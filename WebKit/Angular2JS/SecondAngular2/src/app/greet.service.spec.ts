/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GreetService } from './greet.service';

describe('GreetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetService]
    });
  });

  it('should ...', inject([GreetService], (service: GreetService) => {
    expect(service).toBeTruthy();
  }));
});
