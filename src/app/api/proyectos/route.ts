import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const data = await req.formData();

  const proyecto = await prisma.proyecto.create({
    data: {
      titulo: data.get("titulo") as string,
      modulo: data.get("modulo") as string,
      dificultad: data.get("dificultad") as string,
      estado: data.get("estado") as string,
      descripcion: data.get("descripcion") as string,
      imagen: "/uploads/default.jpg", // luego lo conectamos
    },
  });

  return NextResponse.json(proyecto);
}
