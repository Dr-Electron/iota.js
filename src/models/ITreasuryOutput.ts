// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { IAmountOutput } from "./IAmountOutput";
import { ITypeBase } from "./ITypeBase";

/**
 * The global type for the treasury output.
 */
export const TREASURY_OUTPUT_TYPE = 2;

/**
 * Treasury Output.
 */
export interface ITreasuryOutput extends ITypeBase<2>, IAmountOutput {
}
