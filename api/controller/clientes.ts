import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import clientesRepository from '../repository/clientesRepository';

export default {
  async getAll(req: Request, res: Response) {
    try {
      const clientes = await clientesRepository.getAllClientes(req.query);
      res.status(200).json(clientes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const cliente = await clientesRepository.createCliente(req.body);
      res.status(200).json(cliente);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request<ParamsDictionary>, res: Response) {
    try {
      const id: number = Number(req.params.id);
      const cliente = await clientesRepository.updateCliente(id, req.body);
      res.status(200).json(cliente);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request<ParamsDictionary>, res: Response) {
    try {
      const id: number = Number(req.params.id);
      await clientesRepository.deleteCliente(id);
      res.status(200).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
