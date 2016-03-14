/// <reference path="../../../base.d.ts" />
/// <reference path="../../../_internal/EntityEnum/dg_car.d.ts" />
declare module Form.dg_car.Mobile {
  module Information {
    module Tabs {
      interface general extends IPage.SectionCollectionBase {
        get(name: "account information"): IPage.PageSection;
        get(name: string): IPage.EmptyPageSection;
        get(): IPage.PageSection[];
        get(index: number): IPage.PageSection;
        get(chooser: (item: IPage.PageSection, index: number) => boolean): IPage.PageSection[];
      }
    }
    interface Attributes extends IPage.AttributeCollectionBase {
      get(name: "dg_name"): IPage.Attribute<string>;
      get(name: "statecode"): IPage.OptionSetAttribute<dg_car_statecode>;
      get(name: "ownerid"): IPage.LookupAttribute;
      get(name: string): IPage.EmptyAttribute;
      get(): IPage.Attribute<any>[];
      get(index: number): IPage.Attribute<any>;
      get(chooser: (item: IPage.Attribute<any>, index: number) => boolean): IPage.Attribute<any>[];
    }
    interface Controls extends IPage.ControlCollectionBase {
      get(name: "dg_name"): IPage.StringControl;
      get(name: "statecode"): IPage.OptionSetControl<dg_car_statecode>;
      get(name: "ownerid"): IPage.LookupControl;
      get(name: string): IPage.EmptyControl;
      get(): IPage.BaseControl[];
      get(index: number): IPage.BaseControl;
      get(chooser: (item: IPage.BaseControl, index: number) => boolean): IPage.BaseControl[];
    }
    interface Tabs extends IPage.TabCollectionBase {
      get(name: "general"): IPage.PageTab<Tabs.general>;
      get(name: string): IPage.EmptyPageTab;
      get(): IPage.PageTab<IPage.Collection<IPage.PageSection>>[];
      get(index: number): IPage.PageTab<IPage.Collection<IPage.PageSection>>;
      get(chooser: (item: IPage.PageTab<IPage.Collection<IPage.PageSection>>, index: number) => boolean): IPage.PageTab<IPage.Collection<IPage.PageSection>>[];
    }
  }
  interface Information extends IPage.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "dg_name"): IPage.Attribute<string>;
    getAttribute(attributeName: "statecode"): IPage.OptionSetAttribute<dg_car_statecode>;
    getAttribute(attributeName: "ownerid"): IPage.LookupAttribute;
    getAttribute(attributeName: string): IPage.EmptyAttribute;
    getControl(controlName: "dg_name"): IPage.StringControl;
    getControl(controlName: "statecode"): IPage.OptionSetControl<dg_car_statecode>;
    getControl(controlName: "ownerid"): IPage.LookupControl;
    getControl(controlName: string): IPage.EmptyControl;
  }
}
