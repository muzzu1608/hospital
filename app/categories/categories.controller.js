'use strict';

const db = require("../../config/db");

exports.list = async (request, response, next) => {
    try {
        const categories = await db.categories.findAll();
        response.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

exports.create = async (request, response, next) => {
    try {
        const category = request.body;
        const newCategory = await db.categories.create(category);
        response.status(200).send(newCategory);
    } catch (error) {
        next(error);
    }
};

exports.categoryById = async (request, response, next) => {
    try {
        const category = await db.categories.findByPk(request.params.id);
        response.status(200).json(category);
    } catch (error) {
        next(error);
    }
};

exports.update = async (request, response, next) => {
    const category = request.body;
    const updateCategory = await db.categories.update(category, { where: { id: request.params.id } });
    response.status(200).json(updateCategory);
};

exports.remove = async (request, response, next) => {
    try {
        await db.categories.destroy({ where: { id: request.params.id } });
        response.status(200).send({});
    } catch (error) {
        next(error);
    }
};