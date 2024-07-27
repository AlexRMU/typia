import { Atomic } from "../../typings/Atomic";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataConstantValue<T extends Atomic.Type> {
  value: T;
  tags: IMetadataTypeTag[][] | undefined;
  description?: string | null;
  jsDocTags?: IJsDocTagInfo[];
}
