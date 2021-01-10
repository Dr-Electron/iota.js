// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { ITypeBase } from "./ITypeBase";

/**
 * The global type for the payload.
 */
export const INDEXATION_PAYLOAD_TYPE: number = 2;

/**
 * Indexation payload.
 */
export interface IIndexationPayload extends ITypeBase<2> {
    /**
     * The index name.
     */
    index: string;

    /**
     * The index data.
     */
    data?: string;
}
