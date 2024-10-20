import { DeleteUserController } from '../../../src/modules/deleteUser/deleteUserController.js';
import { DeleteUserUsecase } from '../../../src/modules/deleteUser/deleteUserUsecase.js';
import { describe, test, expect } from 'vitest';
import { UserRepositoryMock } from '../../../src/shared/infra/repositories/userRepositoryMock.js';
import { HttpRequest } from '../../../src/shared/helpers/externalInterfaces/httpModels.js';

describe('Tests for DeleteUser controller', () => {
	test('Test deleteUser Controller', async () => {
		const repo = new UserRepositoryMock();
		const usecase = new DeleteUserUsecase(repo);
		const controller = new DeleteUserController(usecase);

		const request = new HttpRequest({
			userId: 'd5135e3e-646a-55e7-a38d-9724159b7f9f',
		});

		const response = await controller.call(request);

		expect(response?.statusCode).toEqual(200);
		expect(response?.body['user']['name']).toEqual('Beulah Watkins');
		expect(response?.body['user']['email']).toEqual('nen@pukaon.dj');
		expect(response?.body['user']['favoriteGenres']).toEqual('Conto');
		expect(response?.body['user']['favoriteBook']).toEqual('1984');
		expect(response?.body['message']).toEqual('the user was deleted');
	});

	test('Test deleteUser Controller missing userId', async () => {
		const repo = new UserRepositoryMock();
		const usecase = new DeleteUserUsecase(repo);
		const controller = new DeleteUserController(usecase);

		const request = new HttpRequest({});

		const response = await controller.call(request);

		expect(response?.statusCode).toEqual(400);
		expect(response?.body).toEqual('Field userId is missing');
	});

	test('Test deleteUser COntroller userId wrongType', async () => {
		const repo = new UserRepositoryMock();
		const usecase = new DeleteUserUsecase(repo);
		const controller = new DeleteUserController(usecase);

		const request = new HttpRequest({
			userId: 25,
		});

		const response = await controller.call(request);

		expect(response?.statusCode).toEqual(400);
		expect(response?.body).toEqual(
			`Field userId isn't in the right type.
 Received: number.
 Expected: string`
		);
	});
});
