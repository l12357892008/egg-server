// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNew from '../../../app/model/New';

declare module 'egg' {
  interface IModel {
    New: ReturnType<typeof ExportNew>;
  }
}
