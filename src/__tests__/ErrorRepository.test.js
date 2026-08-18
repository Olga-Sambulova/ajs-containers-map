import ErrorRepository from '../js/ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('should return correct error message for existing code', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
        expect(errorRepo.translate(400)).toBe('Bad Request');
        expect(errorRepo.translate(401)).toBe('Unauthorized');
        expect(errorRepo.translate(403)).toBe('Forbidden');
    });

    test('should return "Unknown error" for non-existent code', () => {
        expect(errorRepo.translate(999)).toBe('Unknown error');
        expect(errorRepo.translate(0)).toBe('Unknown error');
        expect(errorRepo.translate(12345)).toBe('Unknown error');
    });
});
