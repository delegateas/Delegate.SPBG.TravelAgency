/// <reference path="../../../base.d.ts" />
/// <reference path="../../../_internal/EntityEnum/dg_country.d.ts" />
declare module Form.dg_country.Main {
  module Information {
    module Tabs {
    }
    interface Attributes extends IPage.AttributeCollectionBase {
      get(name: "dg_name"): IPage.Attribute<string>;
      get(name: "dg_iso3166code"): IPage.Attribute<string>;
      get(name: string): IPage.EmptyAttribute;
      get(): IPage.Attribute<any>[];
      get(index: number): IPage.Attribute<any>;
      get(chooser: (item: IPage.Attribute<any>, index: number) => boolean): IPage.Attribute<any>[];
    }
    interface Controls extends IPage.ControlCollectionBase {
      get(name: "dg_name"): IPage.StringControl;
      get(name: "dg_iso3166code"): IPage.StringControl;
      get(name: string): IPage.EmptyControl;
      get(): IPage.BaseControl[];
      get(index: number): IPage.BaseControl;
      get(chooser: (item: IPage.BaseControl, index: number) => boolean): IPage.BaseControl[];
    }
    interface Tabs extends IPage.TabCollectionBase {
      get(name: string): IPage.EmptyPageTab;
      get(): IPage.PageTab<IPage.Collection<IPage.PageSection>>[];
      get(index: number): IPage.PageTab<IPage.Collection<IPage.PageSection>>;
      get(chooser: (item: IPage.PageTab<IPage.Collection<IPage.PageSection>>, index: number) => boolean): IPage.PageTab<IPage.Collection<IPage.PageSection>>[];
    }
  }
  interface Information extends IPage.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "dg_name"): IPage.Attribute<string>;
    getAttribute(attributeName: "dg_iso3166code"): IPage.Attribute<string>;
    getAttribute(attributeName: string): IPage.EmptyAttribute;
    getControl(controlName: "dg_name"): IPage.StringControl;
    getControl(controlName: "dg_iso3166code"): IPage.StringControl;
    getControl(controlName: string): IPage.EmptyControl;
  }
}
