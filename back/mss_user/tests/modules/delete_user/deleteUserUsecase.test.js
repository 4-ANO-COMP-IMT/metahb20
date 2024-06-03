import { DeleteUserUsecase } from '../../../src/modules/deleteUser/deleteUserUsecase.js';
import { describe, test, expect } from 'vitest';
import { User } from '../../../src/shared/domain/entities/user.js';
import { UserRepositoryMock } from '../../../src/shared/infra/repositories/userRepositoryMock.js';

const repo = new UserRepositoryMock();

describe('Delte User Usecase Tests', () => {
	test('Test deleteUser Usecase', async () => {
		const id = '93bc6ada-c0d1-7054-66ab-e17414c48ae3';
		const usecase = new DeleteUserUsecase(repo);

		const user = await usecase.call(id);

		expect(user).toBeInstanceOf(User);
		expect(user.name).toEqual('Mildred McGee');
	});

	test('Test deleteUser No Items Found', async () => {
		const id = '93bc6ada-c0d1-7054-66ab-e17414c48ae4';
		const usecase = new DeleteUserUsecase(repo);

		await expect(usecase.call(id)).rejects.toThrowError(
			'No items found for userId'
		);
	});

	test('Test deleteUser invalid userId', async () => {
		const id = '12';
		const usecase = new DeleteUserUsecase(repo);

		await expect(usecase.call(id)).rejects.toThrowError(
			'Field userId is not valid'
		);
	});
});
