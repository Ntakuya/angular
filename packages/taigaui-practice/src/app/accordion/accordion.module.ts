import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAccordionModule } from '@taiga-ui/kit';

import { AccordionRoutingModule } from './accordion-routing.module';
import { pages } from './pages';
import { components } from './components';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, AccordionRoutingModule, TuiAccordionModule],
})
export class AccordionModule {}
