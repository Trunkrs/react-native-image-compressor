//
//  TRNCompressor.m
//  TRNReactNativeImageCompressor
//
//  Created by Leonard Breitkopf on 30/08/2019.
//  Copyright © 2019 Trunkrs. All rights reserved.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_REMAP_MODULE(TRNCompressor, TRNCompressorManager, NSObject)

RCT_EXTERN_METHOD(
    compress: (NSString*) value
    options: (NSDictionary*) options
    resolver: (RCTPromiseResolveBlock) resolve
    rejecter: (RCTPromiseRejectBlock) reject
)

@end
