/* -*- Mode: IDL; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public

 * License, v. 2.0. If a copy of the MPL was not distributed with this file,

 * You can obtain one at http://mozilla.org/MPL/2.0/.

 *

 * Copyright © 2012 W3C® (MIT, ERCIM, Keio), All Rights Reserved. W3C

 * liability, trademark and document use rules apply.

 */



dictionary OpenWindowEventDetail {

  DOMString url = "";

  DOMString name = "";

  DOMString features = "";

  Node? frameElement = null;

  boolean forceNoReferrer = false;

};



dictionary DOMWindowResizeEventDetail {

  long width = 0;

  long height = 0;

};
