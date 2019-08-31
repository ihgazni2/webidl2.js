/* -*- Mode: IDL; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public

 * License, v. 2.0. If a copy of the MPL was not distributed with this file,

 * You can obtain one at http://mozilla.org/MPL/2.0/.

 *

 * The origin of this IDL file is

 * http://www.w3.org/TR/SVG2/

 *

 * Copyright © 2012 W3C® (MIT, ERCIM, Keio), All Rights Reserved. W3C

 * liability, trademark and document use rules apply.

 */



interface SVGFESpecularLightingElement : SVGElement {

  [Constant]

  readonly attribute SVGAnimatedString in1;

  [Constant]

  readonly attribute SVGAnimatedNumber surfaceScale;

  [Constant]

  readonly attribute SVGAnimatedNumber specularConstant;

  [Constant]

  readonly attribute SVGAnimatedNumber specularExponent;

  [Constant]

  readonly attribute SVGAnimatedNumber kernelUnitLengthX;

  [Constant]

  readonly attribute SVGAnimatedNumber kernelUnitLengthY;

};



/*SVGFESpecularLightingElement implements SVGFilterPrimitiveStandardAttributes;*/
