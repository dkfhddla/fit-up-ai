import { BoundingBox, DetectedPerson } from '../types';

// Incident containment: browser clients must never receive a shared API key.
// Restore these operations only through an authenticated, rate-limited backend.
export const isApiKeyAvailable = (): boolean => false;

export const detectPeopleInImage = async (
    _imageBase64: string,
    _modelName: string
): Promise<DetectedPerson[]> => {
    throw new Error('apiKeyMissing');
};

export const generateVirtualTryOnImage = async (
    _targetImageBase64: string,
    _personBox: BoundingBox,
    _sourceImageBase64: string,
    _garmentBox: BoundingBox,
    _language: 'ko' | 'en',
    _modelName: string
): Promise<string> => {
    throw new Error('apiKeyMissing');
};
