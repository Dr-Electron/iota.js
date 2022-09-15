// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable no-bitwise */
import { PowHelper } from "@iota/crypto.js";
import { parentPort, workerData } from "worker_threads";

/**
 * Perform the hash on the data until we reach target number of zeros.
 * @param powDigest The pow digest.
 * @param targetZeros The target number of zeros.
 * @param startIndex The index to start looking from.
 * @returns The nonce.
 */
export function doPow(powDigest: Uint8Array, targetZeros: number, startIndex: string): string {
    return PowHelper.performPow(powDigest, targetZeros, startIndex);
}

if (workerData && parentPort) {
    const nonce = doPow(
        workerData.powDigest as Uint8Array,
        workerData.targetZeros as number,
        workerData.startIndex as string
    );
    parentPort.postMessage(nonce);
}
