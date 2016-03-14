/// <reference path="../../../base.d.ts" />
/// <reference path="../../../_internal/EntityEnum/dg_hotel.d.ts" />
declare module Form.dg_hotel.Main {
  module Information {
    module Tabs {
    }
    interface Attributes extends IPage.AttributeCollectionBase {
      get(name: "dg_name"): IPage.Attribute<string>;
      get(name: "dg_arrival"): IPage.Attribute<Date>;
      get(name: "dg_departure"): IPage.Attribute<Date>;
      get(name: "dg_country"): IPage.LookupAttribute;
      get(name: "ownerid"): IPage.LookupAttribute;
      get(name: string): IPage.EmptyAttribute;
      get(): IPage.Attribute<any>[];
      get(index: number): IPage.Attribute<any>;
      get(chooser: (item: IPage.Attribute<any>, index: number) => boolean): IPage.Attribute<any>[];
    }
    interface Controls extends IPage.ControlCollectionBase {
      get(name: "dg_name"): IPage.StringControl;
      get(name: "dg_arrival"): IPage.DateControl;
      get(name: "dg_departure"): IPage.DateControl;
      get(name: "dg_country"): IPage.LookupControl;
      get(name: "ownerid"): IPage.LookupControl;
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
    getAttribute(attributeName: "dg_arrival"): IPage.Attribute<Date>;
    getAttribute(attributeName: "dg_departure"): IPage.Attribute<Date>;
    getAttribute(attributeName: "dg_country"): IPage.LookupAttribute;
    getAttribute(attributeName: "ownerid"): IPage.LookupAttribute;
    getAttribute(attributeName: string): IPage.EmptyAttribute;
    getControl(controlName: "dg_name"): IPage.StringControl;
    getControl(controlName: "dg_arrival"): IPage.DateControl;
    getControl(controlName: "dg_departure"): IPage.DateControl;
    getControl(controlName: "dg_country"): IPage.LookupControl;
    getControl(controlName: "ownerid"): IPage.LookupControl;
    getControl(controlName: string): IPage.EmptyControl;
  }
}
