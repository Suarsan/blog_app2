import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TagsDaoService } from 'src/app/dao/tags-dao-services/tags-dao-service/tags-dao.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private tagsDaoService: TagsDaoService) { }

  public getTags() {
    return this.tagsDaoService.getTags().pipe(
      map(o => o['data']['getTags'])
    );
  }
}
